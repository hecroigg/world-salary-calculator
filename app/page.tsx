import { SalaryCalculator } from "@/components/salary-calculator";
import { getCountry } from "@/lib/countries";
export default function Home(){return <SalaryCalculator country={getCountry("germany")} language="en"/>}
