import CampaignForm from "@/components/CampaignForm";
import './campaign.scss';

export default function Page({params}) {
    const { campaign: slug } = params;

    return <CampaignForm slug={slug}></CampaignForm>
}