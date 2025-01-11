export default function AchievementCard({ icon, title, description }:{ icon: React.ReactNode, title: string, description: string }) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    )
}