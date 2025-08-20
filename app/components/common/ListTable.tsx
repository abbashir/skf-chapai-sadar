type Column = {
  key: string;   // field in data object
  label: string; // heading text
};

type ListTableProps = {
  datas: Array<Record<string, any>>;
  title: string;
  columns: Column[];
};

export default function ListTable({ datas, title, columns }: ListTableProps) {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {datas.map((item, index) => (
            <tr key={item.id || index} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="border border-gray-300 px-4 py-2"
                >
                  {col.key === "id" ? index + 1 : item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
