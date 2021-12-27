import './Column.scss';

const Column = (props) => {
    const { width, widthOffsetPx, backgroundColor, children} = props;

    return <div className="column" style={{ width: 'calc('+widthOffsetPx + 'px + ' + width + '%)', backgroundColor }}>
        {children}
    </div>
}

export default Column;