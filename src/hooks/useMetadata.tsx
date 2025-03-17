import { useEffect, useState } from 'react';

export const useMetadata = (title: string) => {
  const [pageTitle, setPageTitle] = useState<string>('');

  useEffect(() => {
    setPageTitle(title);
    document.title = `${pageTitle} | Golobe`;
  }, [title, pageTitle]);
};
