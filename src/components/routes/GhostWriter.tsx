import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

// Blog
// Email
// Product Description

const GhostWrite = () => {
  return (
    <motion.div>
      <Tabs defaultValue="blog">
        <TabsList>
          <TabsTrigger value="blog">Blog & Article</TabsTrigger>
          <TabsTrigger value="email">Mail Writer</TabsTrigger>
          <TabsTrigger value="productDescription">
            Product Description
          </TabsTrigger>
        </TabsList>
        <TabsContent value="blog"></TabsContent>
        <TabsContent value="email"></TabsContent>
        <TabsContent value="productDescription"></TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default GhostWrite;
