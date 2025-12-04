'use server';

import {
  getPersonalizedTravelRecommendations,
  type PersonalizedTravelRecommendationsInput,
} from '@/ai/flows/personalized-travel-recommendations';

export async function generateRecommendations(
  input: PersonalizedTravelRecommendationsInput
) {
  try {
    const result = await getPersonalizedTravelRecommendations(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating recommendations:', error);
    return {
      success: false,
      error:
        'Fehler bei der Erstellung der Empfehlungen. Bitte versuchen Sie es später erneut.',
    };
  }
}
