 //  درست شد 
type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search opportunities..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
      />
    </div>
  );
}
