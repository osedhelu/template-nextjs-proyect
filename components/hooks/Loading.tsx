import { useState, type FC, useEffect, type ReactNode, Suspense } from "react";

const TemplateSkeleton: FC = () => {
    return (
        <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

interface Props {
    templateLoading?: ReactNode;
    children: ReactNode;
}

export const Loading: FC<Props> = ({ children, templateLoading = <TemplateSkeleton /> }) => {
    const [isHydrated, setIsHydrated] = useState(false);
    useEffect(() => {
        setIsHydrated(true);
    }, []);
    return <Suspense fallback={templateLoading}>
        {isHydrated ? children : templateLoading}
    </Suspense>;
};
