import { Content, Header, Footer } from 'components/Layout';
import React from 'react';

const EmptyLayout = ({ children, ...restProps }) => (
  <main className="cr-app bg-light" {...restProps}>
    <Content fluid onClick={this.handleContentClick}>
      <Header />
      {children}
      <Footer />
    </Content>
  </main>
);

export default EmptyLayout;
