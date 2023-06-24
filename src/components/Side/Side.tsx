interface SideProps {
  width: number;
}
export default function Side({ width }: SideProps) {
  return (
    <div
      style={{ width: `${width}px`, height: "10px" }}
      className="bg-gray-500 m-1"></div>
  );
}
