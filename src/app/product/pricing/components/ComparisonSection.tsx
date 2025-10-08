import SectionContainer from "@/components/global/SectionContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { comparisonTableData } from "../pricingData";

const ComparisonSection = () => {
  return (
    <SectionContainer id="pricing-comparison-section">
      <SectionTitle title="Compare Plans" subtitle="See how each plan compares to the next." />
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Free</th>
            <th>Pro</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Workspaces</td>
            <td>1</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>Blocks</td>
            <td>50</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
        </tbody>
      </table>
    </SectionContainer>
  );
};

export default ComparisonSection;
