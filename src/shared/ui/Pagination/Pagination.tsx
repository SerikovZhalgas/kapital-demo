import cls from './Pagination.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../Button';
import { Icon } from '../Icon';
import LeftArrowIcon from '../../assets/icons/left-arrow.svg';
import RightArrowIcon from '../../assets/icons/right-arrow.svg';

interface PaginationProps {
    className?: string;
    page: number;
    count: number;
    limit: number;
    onPageChange: (newPage: number) => void;
}

export const Pagination = (props: PaginationProps) => {
    const { className, page, count, limit, onPageChange } = props;

    const totalPages = Math.ceil(count / limit);
    const maxPageNumbersToShow = 5;

    const getPages = () => {
        const pages = [];

        if (totalPages <= maxPageNumbersToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            let startPage = Math.max(
                1,
                page - Math.floor(maxPageNumbersToShow / 2),
            );
            const endPage = Math.min(
                totalPages,
                startPage + maxPageNumbersToShow - 1,
            );

            if (endPage - startPage + 1 < maxPageNumbersToShow) {
                const diff = maxPageNumbersToShow - (endPage - startPage + 1);
                startPage = Math.max(1, startPage - diff);
            }

            if (startPage > 1) {
                pages.push(1);
                if (startPage > 2) {
                    pages.push('...');
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pages.push('...');
                }
                pages.push(totalPages);
            }
        }
        return Array.from(new Set(pages));
    };

    const pagesToDisplay = getPages();

    const handlePageClick = (pageNumber: string | number) => {
        if (typeof pageNumber === 'string') return;
        onPageChange(pageNumber);
    };

    return (
        <nav className={classNames(cls.Pagination, {}, [className])}>
            <ul className={cls.paginationList}>
                <li>
                    <Button
                        onClick={() => onPageChange(page - 1)}
                        disabled={page === 1}
                    >
                        <Icon Svg={LeftArrowIcon} />
                    </Button>
                </li>
                {pagesToDisplay.map((pageNumber, index) => (
                    <li key={index}>
                        <Button
                            onClick={() => handlePageClick(pageNumber)}
                            disabled={pageNumber === '...'}
                            variant={page === pageNumber ? 'filled' : 'outline'}
                        >
                            {pageNumber}
                        </Button>
                    </li>
                ))}
                <li>
                    <Button
                        onClick={() => onPageChange(page + 1)}
                        disabled={page === totalPages}
                    >
                        <Icon Svg={RightArrowIcon} />
                    </Button>
                </li>
            </ul>
        </nav>
    );
};
