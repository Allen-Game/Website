import Link from 'next/link';

/**
 * @param {title} title 游戏标题
 * @param {alt} alt alt
 * @param {img} img 图片
 * @param {href} href 游戏链接
*/

export const game_Card = ({ href = '', img = '', alt = '', title = '' }) => {
    return (
        <div className={Style.Card}>
            <div className={Style.title}>{title}</div>
            <img src={img} alt={alt} style={{ height: "720px", width: "720px" }}></img>
            <Link href={href}>play</Link>
        </div>
    )
}

export default game_Card