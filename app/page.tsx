"use client"

import DynamicDataBackground from "@/components/dynamic-data-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import VideoPlayer from "@/components/video-player"
import { BarChart3, Calculator, ExternalLink, FileSpreadsheet, PieChart, Table } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect } from "react"

export default function Home(): React.ReactElement {
  
  useEffect(() => {
    // 平滑滚动效果
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // 减去导航栏高度
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                width={32}
                height={32}
                alt="智能表格"
                className="rounded"
              />
              <span className="font-bold">智能表格定制服务</span>
            </Link>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#what-is" className="text-sm font-medium hover:underline underline-offset-4">
              智能表格是什么
            </Link>
            <Link href="#case-studies" className="text-sm font-medium hover:underline underline-offset-4">
              案例展示
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              联系我们
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero section */}
        <section className="w-full py-20 md:py-24 lg:py-32 bg-blue-600 dark:bg-blue-800 relative overflow-hidden">
          {/* 背景装饰元素 - 智能表格和办公相关元素 */}
          <div className="absolute inset-0 z-0">
            {/* 左上角表格图标 */}
            <div className="absolute top-10 left-10 text-white opacity-10" style={{ transform: "scale(4)" }}>
              <Table />
            </div>
            {/* 右上角电子表格图标 */}
            <div className="absolute top-20 right-[10%] text-white opacity-10" style={{ transform: "scale(3) rotate(15deg)" }}>
              <FileSpreadsheet />
            </div>
            {/* 左下角图表图标 */}
            <div
              className="absolute bottom-20 left-[15%] text-white opacity-10"
              style={{ transform: "scale(3.5) rotate(-10deg)" }}
            >
              <BarChart3 />
            </div>
            {/* 右下角饼图图标 */}
            <div className="absolute bottom-10 right-[20%] text-white opacity-10" style={{ transform: "scale(4) rotate(5deg)" }}>
              <PieChart />
            </div>
            {/* 中间计算器图标 */}
            <div className="absolute top-[40%] left-[25%] text-white opacity-10" style={{ transform: "scale(3) rotate(-5deg)" }}>
              <Calculator />
            </div>
            {/* 动态数据可视化背景 */}
            <div className="absolute inset-0">
              <DynamicDataBackground className="opacity-80" />
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center items-center text-center space-y-6 max-w-3xl">
                <div className="space-y-4">
                  <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl xl:text-7xl/none text-white" style={{ color: 'white' }}>智能表格定制服务</h1>
                  <p className="max-w-[600px] text-white md:text-2xl font-medium" style={{ color: 'white' }}>
                  让数据管理变得简单高效，为您的企业量身定制智能化表格解决方案
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
                  <Button className="px-8 bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 text-lg font-semibold">
                    <Link href="#what-is">了解更多</Link>
                  </Button>
                  <Button className="px-8 bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 text-lg font-semibold">
                    <Link href="#contact">联系我们</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is intelligent table section */}
        <section id="what-is" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">智能表格是什么？</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  智能表格是一种创新的数据管理工具，通过人工智能技术实现自动化数据处理、分析和可视化
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl items-center gap-6 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">智能表格的优势</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                      ✓
                    </div>
                    <span>自动化数据处理，减少人工操作</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                      ✓
                    </div>
                    <span>智能分析功能，快速发现数据洞察</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                      ✓
                    </div>
                    <span>多样化数据可视化，直观呈现结果</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                      ✓
                    </div>
                    <span>高度自定义，满足各行业特殊需求</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                      ✓
                    </div>
                    <span>强大的协作功能，支持团队高效工作</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <VideoPlayer />
              </div>
            </div>
          </div>
        </section>

        {/* 热门智能表格示例 */}
        <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">热门智能表格示例</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  立即体验我们精心设计的智能表格模板，满足不同业务场景需求
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/客户服务跟进.jpg"
                      width={400}
                      height={200}
                      alt="客户服务跟进表"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <CardTitle className="text-white p-4">客户服务跟进表</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>自动提醒客户跟进时间</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>客户互动历史记录</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>服务质量评分分析</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href="https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFk5tOGVRDTRl0kQXFvpa_st?scode=AAwA6QduAAoRjYevc8AMEAdQYiAIw&tab=q979lj" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">
                      查看模板
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/财务管理.jpg"
                      width={400}
                      height={200}
                      alt="财务管理报表"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <CardTitle className="text-white p-4">财务管理报表</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>收入支出自动分类</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>多维度财务分析图表</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>预算执行偏差预警</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href="https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkMOcalRe0SyCEPLBnVv_st?scode=AAwA6QduAAo3ullz50AMEAdQYiAIw&tab=db_L9Phd0" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">
                      查看模板
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/项目管理.jpg"
                      width={400}
                      height={200}
                      alt="项目管理表"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <CardTitle className="text-white p-4">项目管理表</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>任务进度自动跟踪</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>资源分配优化建议</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>项目风险预测提醒</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href="https://doc.weixin.qq.com/smartsheet/s3_ADoAPxTnAFkfZjyAOYdQP60DB7qfw_st?scode=AAwA6QduAAoplSLTDpAMEAdQYiAIw&tab=db_qj1WYl" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">
                      查看模板
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">联系我们</h2>
                <p className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl text-left px-8">
                  　　我们是广州文宣，国内领先的企业微信服务提供商，腾讯官方签约的头部合作伙伴，国家高新技术企业、工信部专精特新企业，源自清华北大名校、腾讯阿里大厂的技术管理和工程师团队，拥有20余项专利和软件著作权，通过ISO管理体系认证，荣获AAA级信用等级评价，10年累计服务逾500家行业知名企业和近10000家小微企业。期待与您沟通，为您的企业提供最适合的智能表格定制方案
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold">联系方式</h3>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center">
                      <span className="font-semibold mr-2">电话：</span>
                      <span>18825080358</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold mr-2">邮箱：</span>
                      <span>chen.jiantu@weiwise.cn</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold mr-2">地址：</span>
                      <span>广州市南沙区南沙街金岭北路95号315房（部位：A17）</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">工作时间</h3>
                  <p className="mt-3">周一至周五: 9:00 - 22:00</p>
                  <p>周末及节假日: 休息（回复可能不及时）</p>
                </div>

                {/* 联系我按钮 */}
                <div className="pt-4">
                  <a
                    href="https://work.weixin.qq.com/ca/cawcde24d4be0fd0e5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button size="lg" className="w-full md:w-auto px-8 py-6 text-lg flex items-center gap-2">
                      立即联系我 <ExternalLink className="h-5 w-5" />
                    </Button>
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">点击按钮直接联系我们的客服团队</p>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>扫码咨询</CardTitle>
                  <CardDescription>扫描下方二维码，立即与我们联系</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="relative h-64 w-64">
                    <Image
                      src="/二维码.jpg"
                      alt="联系我们二维码"
                      width={256}
                      height={256}
                      className="border p-2 rounded-md"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <p className="text-center text-sm text-muted-foreground">扫描二维码添加客服微信，获取更多服务信息</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 智能表格定制服务. 保留所有权利.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              条款说明
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              隐私政策
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

