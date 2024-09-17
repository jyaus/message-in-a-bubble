
export default function Panel({ messageRef, clickHandler }) {
  
  return (
    <div className="panel">
    <div className="panel-inner">
    <div className="panel-header">
      <h1>Message in a Bubble</h1>
      <p class="description">empheral messages for an emphemeral medium</p>
    </div>
      <textarea
        maxLength="60"
        ref={messageRef}
        aria-label="Enter a short message"
        placeholder="Enter a short message"
      />
      <button onClick={clickHandler}>Send a message</button>
    </div>
  </div>
  );
}
