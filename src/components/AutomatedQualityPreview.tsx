function AutomatedQualityPreview() {
  return (
    <div className="quality-card-image" aria-label="Gas meter installation quality checks preview">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Gas_meter.JPG"
        alt="Home gas meter installation"
        className="quality-card-photo"
        loading="lazy"
      />
      <div className="quality-card-checks">
        <p className="quality-card-title">Checks</p>
        <p className="quality-check quality-check-pass">1. Meter mounted securely - Passed</p>
        <p className="quality-check quality-check-pass">2. Pipe connections sealed - Passed</p>
        <p className="quality-check quality-check-fail">3. Leak pressure test - Failed</p>
      </div>
    </div>
  );
}

export default AutomatedQualityPreview;
