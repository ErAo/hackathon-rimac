import './campaign.scss';
import campaigns from "@/mock/campaign.json";
import CookieConsent from '@/components/module/CookieConsent/CookieConsent';
import Quiz from '@/components/Quiz/Quiz';

export default function Page({params}) {
    const { campaign: slug } = params;
    const createCampaign = () => {
        const response = campaigns.find(campaign => campaign.slug === slug);
        return response;
    }

    const data = createCampaign();
    return <>
        <main>
            <Quiz data={data} />
        </main>
        <CookieConsent />
    </>
}