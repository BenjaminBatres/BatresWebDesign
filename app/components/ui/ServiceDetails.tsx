interface IDetails {
    icon: any
    title: string
    description: string
}

export default function ServiceDetails({icon, title, description}:IDetails) {
  return (
    <div className="bg-white p-6 rounded-lg space-y-6">
      <div className="size-20 bg-[#ebebeb] rounded-full flex justify-center items-center">
        <div className="text-4xl">{icon}</div>
      </div>
      <div className="space-y-3">
        <h3 className="text-[25px]/[120%] font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
