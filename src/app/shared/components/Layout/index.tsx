import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  title: string;
  description: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <Helmet>
        {
          // eslint-disable-next-line
          title && <title>{title}</title>
        }
        {description && <meta name="description" content={description} />}
      </Helmet>
      {children}
    </>
  );
};

Layout.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  //@ts-ignore
  children: PropTypes.node.isRequired,
};
