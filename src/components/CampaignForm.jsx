import campaigns from "@/mock/campaign.json";
import ChatComponent from "./module/ChatComponent/ChatComponent";

export default function CampaignForm({slug}) {
    const createCampaign = () => {
        const response = campaigns.find(campaign => campaign.slug === slug);
        return response;
    }

    const data = createCampaign();
    
    return (
        <>
            <input type="text" placeholder="Campaign Name" />
            <ChatComponent />
            <button>Submit</button>
        </>
    )
}