import "./styles.css";
import "./VideoJS";
import VideoJS from "./VideoJS";
import vid from "./demo/vr.mp4";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <VideoJS playerId="player1" source={vid} />
    </div>
  );
}
