// queries/getProfileBanner.ts
import datoCMSClient from './datoCMSClient';
import { ProfileBanner } from '../types';

const GET_PROFILE_BANNER = `
  query {
    recruiterProfile {
      backgroundImage {
        url
      }
      headline
      resumeLink {
        url
      }
      linkedinLink
      profileSummary
    }
  }
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  try {
    const data = await datoCMSClient.request<{ recruiterProfile: ProfileBanner }>(GET_PROFILE_BANNER);
    console.log("🚀 ~ getProfileBanner ~ data:", data)
    return data.recruiterProfile;
  } catch (error) {
    console.error('Error fetching profile banner:', error);
    throw error;
  }
}
