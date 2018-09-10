import { Content, Footer, Header } from 'components/Layout';
import React from 'react';
import Comment from 'components/Layout/Comment';
import {
  MdImportantDevices,
  // MdCardGiftcard,
  MdLoyalty,
} from 'react-icons/lib/md';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from 'utils/constants';

class MainLayout extends React.Component {
  
  componentWillReceiveProps() {
    
  }

  componentDidMount() {

    setTimeout(() => {
      if (!this.notificationSystem) {
        return;
      }

      this.notificationSystem.addNotification({
        title: <MdImportantDevices />,
        message: 'Welome to Reduction Admin!',
        level: 'info',
      });
    }, 1500);

    setTimeout(() => {
      if (!this.notificationSystem) {
        return;
      }

      this.notificationSystem.addNotification({
        title: <MdLoyalty />,
        message:
          'Reduction is carefully designed template powered by React and Bootstrap4!',
        level: 'info',
      });
    }, 2500);
  }

  render() {
    const { children } = this.props;
    return (
      <main className="cr-app bg-light">
        <Content fluid onClick={this.handleContentClick}>
          <Header />
          <Comment />
          {children}
          <Footer />
        </Content>

        <NotificationSystem
          dismissible={false}
          ref={notificationSystem =>
            (this.notificationSystem = notificationSystem)
          }
          style={NOTIFICATION_SYSTEM_STYLE}
        />
      </main>
    );
  }
}

export default MainLayout;
