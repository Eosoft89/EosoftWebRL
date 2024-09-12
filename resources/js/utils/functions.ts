export function truncateHTML(htmlString: string, maxLength: number): string{
        
    const text = htmlString.replace(/<[^>]+>/g, '');
    
    if(text.length <= maxLength){
        return text;
    }
    return text.slice(0, maxLength) + '...';
}