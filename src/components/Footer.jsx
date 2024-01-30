export default function Footer() {
  const currentYear = new Date().getFullYear();

  console.log(currentYear); // This will log the current year (e.g., 2024)
  return (
    <footer>
      <small>&copy; by Jeran. All rights reserve {currentYear}</small>
      <small>
        version <b>1.5</b>
      </small>
    </footer>
  );
}
