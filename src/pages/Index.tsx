import { ProposalHeader } from '@/components/ProposalHeader';
import { ProposalMission } from '@/components/ProposalMission';
import { WhyEccosSection } from '@/components/WhyEccosSection';
import { WhatWeDoSection } from '@/components/WhatWeDoSection';
import { TimelineSection } from '@/components/TimelineSection';
import { PricingSection } from '@/components/PricingSection';
import { WhoWeAreSection } from '@/components/WhoWeAreSection';
import { SignOffSection } from '@/components/SignOffSection';
import { CTAFooter } from '@/components/CTAFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ProposalHeader />
      <ProposalMission />
      <WhyEccosSection />
      <WhatWeDoSection />
      <TimelineSection />
      <PricingSection />
      <WhoWeAreSection />
      <SignOffSection />
      <CTAFooter />
    </div>
  );
};

export default Index;
