import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC<{ elementId: string }> = ({ children, elementId }) => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById(elementId));
  }, [elementId]);

  if (rootElement) {
    return createPortal(children, rootElement);
  }
  return null;
};

export default Portal;
