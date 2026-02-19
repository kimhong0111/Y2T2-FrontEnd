export default function Place({allPlaces}) {
  return (
    <li key={allPlaces.id} className="place-item">
      <button>
        <img src={allPlaces.image.src}  alt={allPlaces.image.alt} />
        <h3>{allPlaces.title}</h3>
      </button>
    </li>
  );
}
