type CategoryFilterProps = {
  category: string;
  setCategory: (value: string) => void;
};

const categories = ["All", "Job", "Internship", "Scholarship", "Online Course"];

export default function CategoryFilter({
  category,
  setCategory,
}: CategoryFilterProps) {
  return (
    <div className="mb-6">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3"
      >
        {categories.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
