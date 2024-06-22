import { Component, ReactNode } from "react";

type ErrorProps = {
  children: ReactNode;
};

type ErrorState = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry, there was an error.</h1>;
    }

    return this.props.children;
  }
}
