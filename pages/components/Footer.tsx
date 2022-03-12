import { CheckIcon, ExternalLinkIcon } from "@heroicons/react/outline";
const Footer = () => {
  return (
    <div className="flex justify-end items-center border right-0 p-1">
      <ExternalLinkIcon className="ml-2 hero " />
      <CheckIcon className="hero" /> Last Saved @ 7:25PM
    </div>
  );
};

export default Footer;
