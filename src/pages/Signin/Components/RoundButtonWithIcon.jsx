// import classNames from 'classnames';

export const RoundButtonWithIcon = ({icon: Icon, textColor}) => {
  return (
    <>
      <button className="flex items-center border rounded-full border-slate p-2 hover:shadow-inner outline-slate-300 focus:shadow-inner">
        <Icon className={`h-6 w-6 ${textColor}`} />
      </button>
    </>
  );
};
