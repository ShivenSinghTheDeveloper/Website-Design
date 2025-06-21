function toggleExpand(id){
  const content = document.getElementById(id);
  const header = content.previousElementSibling;

  content.classList.toggle('expanded');
  header.classList.toggle('expanded');

  if (content.classList.contains('expanded')) {
    setTimeout(() =>  {
      const items = content.querySelectorAll('li');
      items.forEach((item,index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }, 100);
  } else {
      const items = content.querySelectorAll('li');
      items.forEach(item => { 
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
      });
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.expandable-header');
  headers.forEach(header => { 
    header.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.02)';
    });

    header.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});