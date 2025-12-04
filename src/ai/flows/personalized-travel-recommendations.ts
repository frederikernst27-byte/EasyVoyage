// This is a server-side file.
'use server';

/**
 * @fileOverview Provides personalized travel recommendations based on user input.
 *
 * This file exports:
 * - `getPersonalizedTravelRecommendations`: A function that takes user preferences and returns personalized travel recommendations.
 * - `PersonalizedTravelRecommendationsInput`: The input type for the `getPersonalizedTravelRecommendations` function.
 * - `PersonalizedTravelRecommendationsOutput`: The output type for the `getPersonalizedTravelRecommendations` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedTravelRecommendationsInputSchema = z.object({
  budget: z.number().describe('The user\u2019s budget for the vacation.'),
  preferences: z.string().describe('The user\u2019s preferences for the vacation, such as preferred destinations, activities, and travel style.'),
  pastTravelData: z.string().optional().describe('Optional data about the user\u2019s past travel experiences.'),
});

export type PersonalizedTravelRecommendationsInput = z.infer<
  typeof PersonalizedTravelRecommendationsInputSchema
>;

const PersonalizedTravelRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('Personalized travel recommendations based on the user\u2019s budget, preferences, and past travel data.'),
});

export type PersonalizedTravelRecommendationsOutput = z.infer<
  typeof PersonalizedTravelRecommendationsOutputSchema
>;

export async function getPersonalizedTravelRecommendations(
  input: PersonalizedTravelRecommendationsInput
): Promise<PersonalizedTravelRecommendationsOutput> {
  return personalizedTravelRecommendationsFlow(input);
}

const personalizedTravelRecommendationsPrompt = ai.definePrompt({
  name: 'personalizedTravelRecommendationsPrompt',
  input: {schema: PersonalizedTravelRecommendationsInputSchema},
  output: {schema: PersonalizedTravelRecommendationsOutputSchema},
  prompt: `Based on the user's budget of {{budget}}, preferences of {{preferences}}, and past travel data of {{pastTravelData}}, provide personalized travel recommendations.

Consider various destinations, activities, and travel styles to create a tailored vacation package.`,
});

const personalizedTravelRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedTravelRecommendationsFlow',
    inputSchema: PersonalizedTravelRecommendationsInputSchema,
    outputSchema: PersonalizedTravelRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await personalizedTravelRecommendationsPrompt(input);
    return output!;
  }
);
