export const RoundButtonWithIcon = ({icon}) => {
  return (
    <>
      <button className="flex items-center border rounded-full border-slate p-2 hover:shadow-inner outline-slate-300 focus:shadow-inner">
        {icon}
      </button>
    </>
  );
};
