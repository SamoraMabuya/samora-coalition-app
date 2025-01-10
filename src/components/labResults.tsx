import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type LabResultsProps = {
  results: string[];
};

const LabResults = ({ results }: LabResultsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lab Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-[300px] overflow-y-auto pr-2">
          {results.map((result) => (
            <div
              key={result}
              className="flex items-center justify-between hover:bg-[#F6F7F8] p-4 mb-3 last:mb-0"
            >
              <span>{result}</span>
              <Button variant="ghost" size="icon">
                <Image
                  src="assets/icons/download.svg"
                  alt="Download"
                  width={24}
                  height={24}
                />
                <span className="sr-only">Download {result}</span>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LabResults;
