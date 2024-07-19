import DetailView from "./DetailView";
import Sidebar from "./sidebar";

const Index = () => {
    return (
            <div className="flex h-screen w-screen overflow-hidden flex flex-row">
                <Sidebar />
                <DetailView />
            </div>
    );
};

export default Index;