import useScrollToTop from '@/hooks/useScrollToTop';

/**
 * Functional component wrapper that invokes useScrollToTop on route transition
 */
export default function ScrollToTop() {
  useScrollToTop();
  return null;
}
