import PersonalInformationCard from "./personalInformationCard";

const IntroCardGGrid = () => {
    return (
        <div className="intro-card h-screen w-80 p-6 overflow-y-auto shrink-0" style={{ backgroundColor: 'var(--background)' }}>
            <PersonalInformationCard />
        </div>
    )
};

export default IntroCardGGrid;