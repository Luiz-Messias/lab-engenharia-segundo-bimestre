export default function Toolbar() {
  return (
    <div className="component-container">
      <p>
        <strong>Toolbar:</strong>
      </p>
      <button onClick={() => alert("Playing!")}>Play Movie</button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}
