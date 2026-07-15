type LocationFilterProps = {
  location: string;
  setLocation: (value: string) => void;
};

const locations = ["All", "Kabul", "Herat", "Online"];

export default function LocationFilter({
  location,
  setLocation,
}: LocationFilterProps) {
  return (
    <div className="mb-6">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3"
      >
        {locations.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
