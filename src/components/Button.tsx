interface ButtonProps {
  name: string;
  color: string;
  link?: string;
}

export const MyButton = ({ name, color, link }: ButtonProps) => {

  if (color === 'white') {
    return (
      <div>
        <button className={`block w-full bg-white text-black rounded-lg px-8 py-4 font-semibold transform transition hover:scale-105 duration-300 ease-in-out`}><a href={link}>{name}</a></button>
      </div>
    );
  }

  return (
    <div>
      <button className={`block w-full bg-${color}-800 hover:bg-${color}-700 focus:bg-${color}-700 transition-colors text-white rounded-lg px-8 py-4 font-semibold`}><a href={link}>{name}</a></button>
    </div>
  );
};
