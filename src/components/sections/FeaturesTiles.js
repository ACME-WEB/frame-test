import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class FeaturesTiles extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tiles section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tiles-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Tailor-made features',
      paragraph: 'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-01.svg')}
                        alt="Features tile icon 01"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      Robust workflow
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-02.svg')}
                        alt="Features tile icon 02"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      Robust workflow
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-03.svg')}
                        alt="Features tile icon 03"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      Robust workflow
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-04.svg')}
                        alt="Features tile icon 04"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      Robust workflow
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-05.svg')}
                        alt="Features tile icon 05"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      Robust workflow
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-06.svg')}
                        alt="Features tile icon 06"
                        width={72}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      Robust workflow
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                  </div>
                </div>
              </div>              

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;