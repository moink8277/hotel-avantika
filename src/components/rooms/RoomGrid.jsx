import RoomCard from "./RoomCard";
import "./Rooms.css";

/**
 * RoomGrid
 * Renders a data-driven grid of RoomCard components.
 */
export default function RoomGrid({ rooms = [] }) {
  return (
    <div className="room-grid">
      {rooms.map((room) => (
        <RoomCard key={room.slug} room={room} />
      ))}
    </div>
  );
}
