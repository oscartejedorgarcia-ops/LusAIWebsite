import { FormEvent, useState } from 'react';

interface FileUploadProps {
  compact?: boolean;
}

function FileUpload({ compact = false }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      setErrorMessage('Please select a file before submitting.');
      setSuccessMessage(null);
      return;
    }

    setIsUploading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      const rawBody = await response.text();
      let parsedBody: unknown = rawBody;

      try {
        parsedBody = JSON.parse(rawBody);
      } catch {
        // Keep plain text response when JSON parsing is not possible.
      }

      if (!response.ok) {
        throw new Error(
          `Upload failed (${response.status}): ${
            typeof parsedBody === 'string' ? parsedBody : JSON.stringify(parsedBody)
          }`
        );
      }

      const formattedResponse =
        typeof parsedBody === 'string' ? parsedBody : JSON.stringify(parsedBody, null, 2);

      setSuccessMessage(`Upload successful. Server response: ${formattedResponse}`);
      setSelectedFile(null);

      const fileInput = event.currentTarget.elements.namedItem('file') as HTMLInputElement | null;
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An unknown upload error occurred.';
      setErrorMessage(message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form className={`upload-form ${compact ? 'upload-form-compact' : ''}`} onSubmit={handleSubmit}>
      <label htmlFor="file" className="upload-label">
        Upload one file
      </label>
      <input
        id="file"
        name="file"
        type="file"
        onChange={(event) => setSelectedFile(event.target.files?.[0] ?? null)}
      />

      <button type="submit" className="button-primary" disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload File'}
      </button>

      {successMessage ? <p className="status success">{successMessage}</p> : null}
      {errorMessage ? <p className="status error">{errorMessage}</p> : null}
    </form>
  );
}

export default FileUpload;
