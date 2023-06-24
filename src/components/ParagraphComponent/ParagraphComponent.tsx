import Side from "../Side/Side";
interface SideProps {
  width1: number;
  width2: number;
  width3: number;
}
export default function ParagraphComponent({
  width1,
  width2,
  width3,
}: SideProps) {
  return (
    <div className="bg-green-200 p-1 mb-1.5">
      <Side width={width1} />
      <Side width={width2} />
      <Side width={width3} />
    </div>
  );
}
