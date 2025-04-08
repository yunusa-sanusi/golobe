import { Link } from 'react-router';

type FooterItemsGroupTypes = {
  groupHeader: string;
  groupItems: { text: string; url: string }[];
};

const FooterItemsGroup = ({
  groupHeader,
  groupItems,
}: FooterItemsGroupTypes) => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h5 className="mb-3 font-semibold">{groupHeader}</h5>
      <div className="flex flex-col items-center lg:items-start gap-y-2 text-sm">
        {groupItems.map((item) => {
          return (
            <Link key={item.text} to={item.url}>
              {item.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterItemsGroup;
