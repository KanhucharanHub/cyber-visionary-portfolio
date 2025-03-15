
import { createSlice } from '@reduxjs/toolkit';
import { 
  heroData, 
  aboutData, 
  skillsData, 
  educationData, 
  experienceData, 
  projectsData, 
  contactData,
  personalInfo
} from '../data';

interface PortfolioState {
  hero: typeof heroData;
  about: typeof aboutData;
  skills: typeof skillsData;
  education: typeof educationData;
  experience: typeof experienceData;
  projects: typeof projectsData;
  contact: typeof contactData;
  personalInfo: typeof personalInfo;
}

const initialState: PortfolioState = {
  hero: heroData,
  about: aboutData,
  skills: skillsData,
  education: educationData,
  experience: experienceData,
  projects: projectsData,
  contact: contactData,
  personalInfo: personalInfo
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    // We can add reducer functions here if we need to update the state later
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
  },
});

export const { updatePersonalInfo } = portfolioSlice.actions;

export default portfolioSlice.reducer;
