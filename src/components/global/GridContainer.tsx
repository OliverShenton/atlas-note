// "use client";

// import { Variants } from "motion";
// import { motion } from "motion/react";

// interface GridContainerProps {
//   outerClassName: string;
//   innerClassName: string;
//   children: React.ReactNode[];
// }

// const containerVariant = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.25 },
//   },
// };

// const cardVariant: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
// };

// const GridContainer = ({
//   outerClassName = "",
//   innerClassName = "",
//   children,
// }: GridContainerProps) => {
//   const data = React.Children.toArray(children);

//   return (
//     <motion.div
//       className={outerClassName}
//       variants={containerVariant}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }}>
//       {data.map((d, idx) => (
//         <motion.div className={innerClassName} key={idx} variants={cardVariant}>
//           {d}
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default GridContainer;
