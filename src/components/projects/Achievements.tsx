import { Building2, CheckCircle, Trophy, Users } from "lucide-react";
import AchievementCard from "./AchievementCard";


export default function Achievements() {
    return (
        <section className="py-16 bg-green-600 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AchievementCard
                        icon={<Building2 size={48} />}
                        title="500+"
                        description="Successful Projects"
                    />
                    <AchievementCard
                        icon={<Users size={48} />}
                        title="100%"
                        description="Client Satisfaction"
                    />
                    <AchievementCard
                        icon={<Trophy size={48} />}
                        title="50+"
                        description="Industry Awards"
                    />
                    <AchievementCard
                        icon={<CheckCircle size={48} />}
                        title="25 Years"
                        description="of Excellence"
                    />
                </div>
            </div>
        </section>
    )
}