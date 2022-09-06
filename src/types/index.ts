export enum AutomationType {
  lightBulb = 'lightbulb',
  lightRelay = 'lightRelay',
  lightStrip = 'lightStrip',
  lightStripRGB = 'lightStripRGB',
  lightStripARGB = 'lightStripARGB',
}

export type AutomationZone = {
  uuid: string;
  name: string;
};

export type AutomationItem = {
  uuid: string;
  type: AutomationType;
  name: string;
  zone: AutomationZone;
};
